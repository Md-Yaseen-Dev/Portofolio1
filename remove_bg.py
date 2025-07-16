from PIL import Image
import numpy as np

# Load image
img = Image.open(r'client/src/Public/photo.jpeg').convert('RGBA')
data = np.array(img)

# Define white threshold (tune if needed)
white = np.all(data[:, :, :3] > 240, axis=-1)

data[white, 3] = 0  # Set alpha to 0 where white

# Save as PNG with transparency
out = Image.fromarray(data)
out.save(r'client/src/Public/photo.png')

print('Background removed and saved as photo.png')
