'use client';

import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import { cn } from '@/lib/utils';
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  // Here 'imageUploader' is an api endpoint
  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;
      startTransition(() => {
        // Once the user image is get uploaded, we will redirect him to next page
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setIsDragOver(false);

    toast({
      title: `${file.file.type} type is not supported.`,
      description: 'Please choose a PNG, JPG, or JPEG image instead.',
      variant: 'destructive',
    });
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined }); // For now, we are passing undefined, later in the step 2 we will pass some value

    setIsDragOver(false);
  };

  return (
    <div
      className={cn(
        'relative my-16 flex h-full w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl',
        {
          'bg-rose-900/10 ring-rose-900/25': isDragOver,
        },
      )}
    >
      <div className="relative flex w-full flex-1 flex-col items-center justify-center">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="flex h-full w-full flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="mb-2 h-6 w-6 text-zinc-500" />
              ) : isUploading || isPending ? (
                <Loader2 className="mb-2 h-6 w-6 animate-spin text-zinc-500" />
              ) : (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image className="mb-2 h-6 w-6 text-zinc-500" />
              )}
              <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 h-2 w-40 bg-gray-300"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop file</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Page;
