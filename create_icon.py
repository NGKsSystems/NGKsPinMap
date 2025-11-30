#!/usr/bin/env python3
"""
Icon generation script for NGKs Pin Map
Creates icons in multiple formats for cross-platform support
"""

from PIL import Image, ImageDraw
import os

def create_icon():
    """Create a simple icon with a pin symbol"""

    # Create a 256x256 image with transparent background
    size = (256, 256)
    image = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)

    # Draw a simple pin shape
    # Pin head (circle)
    draw.ellipse([64, 32, 192, 160], fill='#FF6B6B', outline='#CC5555', width=4)

    # Pin point (triangle)
    draw.polygon([(128, 160), (108, 200), (148, 200)], fill='#FF6B6B', outline='#CC5555', width=2)

    # Pin shadow/base
    draw.ellipse([116, 180, 140, 200], fill='#CC5555')

    return image

def save_icons():
    """Save the icon in multiple formats"""

    icon = create_icon()

    # Save as PNG (for Linux and general use)
    icon.save('icon.png', 'PNG')

    # Save as ICO (for Windows)
    # Create different sizes for ICO
    sizes = [16, 32, 48, 64, 128, 256]
    ico_images = []
    for size in sizes:
        resized = icon.resize((size, size), Image.Resampling.LANCZOS)
        ico_images.append(resized)

    ico_images[0].save('icon.ico', format='ICO', sizes=[(img.size[0], img.size[0]) for img in ico_images])

    # Save as ICNS (for macOS)
    # For ICNS, we'll use the PNG as base since PIL doesn't directly support ICNS
    # In a real project, you'd use a tool like png2icns or iconutil
    icon.save('icon.icns', 'PNG')  # Placeholder - real ICNS would need macOS tools

    print("Icons created successfully:")
    print("- icon.png (256x256 PNG)")
    print("- icon.ico (multi-size ICO)")
    print("- icon.icns (256x256 PNG, rename to .icns for macOS)")

if __name__ == '__main__':
    try:
        save_icons()
    except ImportError:
        print("PIL (Pillow) not installed. Install with: pip install Pillow")
    except Exception as e:
        print(f"Error creating icons: {e}")