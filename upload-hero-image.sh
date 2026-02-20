#!/bin/bash

# Hero Image Upload and Optimization Script
# Usage: ./upload-hero-image.sh <input-image-path> <output-filename>

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input-image-path> <output-filename>"
    echo "Example: $0 ~/Downloads/library-room.png Revised_Home_Hero_HSH_2.png"
    exit 1
fi

INPUT_IMAGE="$1"
OUTPUT_NAME="$2"
OUTPUT_PATH="public/$OUTPUT_NAME"

if [ ! -f "$INPUT_IMAGE" ]; then
    echo "Error: Input image '$INPUT_IMAGE' not found"
    exit 1
fi

echo "Optimizing and compressing image for web..."
echo "Input: $INPUT_IMAGE"
echo "Output: $OUTPUT_PATH"

# Create backup of existing file if it exists
if [ -f "$OUTPUT_PATH" ]; then
    BACKUP_PATH="${OUTPUT_PATH}.backup.$(date +%Y%m%d_%H%M%S)"
    echo "Backing up existing file to: $BACKUP_PATH"
    cp "$OUTPUT_PATH" "$BACKUP_PATH"
fi

# Optimize image using ImageMagick
convert "$INPUT_IMAGE" \
    -resize 1920x1280\> \
    -quality 85 \
    -strip \
    -define png:compression-level=9 \
    "$OUTPUT_PATH"

if [ $? -eq 0 ]; then
    FILE_SIZE=$(ls -lh "$OUTPUT_PATH" | awk '{print $5}')
    echo "✓ Success! Image optimized and saved to: $OUTPUT_PATH"
    echo "  File size: $FILE_SIZE"

    # Verify the image is valid
    identify "$OUTPUT_PATH" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "✓ Image verified successfully"
    else
        echo "⚠ Warning: Image may be corrupted"
    fi
else
    echo "✗ Error: Failed to optimize image"
    exit 1
fi
