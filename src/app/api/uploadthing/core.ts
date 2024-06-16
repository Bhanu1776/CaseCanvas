import { db } from '@/db';
import sharp from 'sharp';
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() })) // We are taking the input
    .middleware(async ({ input }) => {
      // Passing through the middleware
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // And getting the output
      const { configId } = metadata.input;

      const res = await fetch(file.url); // We fetched the image
      const buffer = await res.arrayBuffer(); // We converted into buffer

      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      if (!configId) {
        // In the step 1, we are passing configId as undefined, so we need to handle that!
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
          },
        });

        return { configId: configuration.id };
      } else {
        // This is for the step 2, where we are updating the data if configId already exist
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
            //* ImageUrl is an uncropped URL which is been uploaded in the step 1,
            //* Whereas, croppedImageUrl is cropped Image which will be ste by user in the step 2.
          },
        });

        return { configId: updatedConfiguration.id };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
