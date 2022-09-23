# CISTOH

Convert image sequences to HTML using Node.js

## How to use:

1. Convert the video images to a low resolution (around 300*300) and in BMP format.
2. Put the video images in the "Video Images" Folder
3. Run multiimagetohtml2.js using `node multiimagetohtml2.js`
4. Navigate to the output folder then open `outputopener.html`
5. Hope that it works

## Notes:

- If it fails then try splitting the images in half using `node splitvideo.js`
- The video must be white or black completely and not contain any grays (like bad apple)

## Issues:

- Video is very choppy.
- The quality has to be low.
- Must be in bmp format.
- Only in black and white (due to size issues)
