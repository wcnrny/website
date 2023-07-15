export default function TitleCase(text: string): string {
  return text[0].toLocaleUpperCase() + text.slice(1);
}
