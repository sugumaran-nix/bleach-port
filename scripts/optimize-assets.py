from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "public"
for source in root.glob("*.jpg"):
    destination = source.with_suffix(".webp")
    with Image.open(source) as image:
        image.save(destination, "WEBP", quality=82, method=6)
        print(f"{source.name}: {source.stat().st_size} -> {destination.name}: {destination.stat().st_size}")
