export default class ImageReader {
  static toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  static handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (base64: string) => void
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    this.toBase64(file)
      .then(callback)
      .catch((err) => console.error("ImageReader error:", err));
  }
}
