from rembg import remove
from PIL import Image
import io

input_path = r'C:\Users\srush\Desktop\final year project\Durga Bhakt Niwas\tulja.png.jpg'
output_path = r'C:\Users\srush\Desktop\final year project\Durga Bhakt Niwas\src\assets\logo.png'

with open(input_path, 'rb') as f:
    input_data = f.read()

print("Removing background...")
output_data = remove(input_data)

with open(output_path, 'wb') as f:
    f.write(output_data)

# Resize to logo size
img = Image.open(output_path)
img = img.resize((120, 120), Image.LANCZOS)
img.save(output_path, 'PNG')

print(f"Done! Saved to {output_path}")
print(f"Size: {img.size}")
