import Card from "../components/atoms/Card/Card";

export default function CardPage() {
  return (
    <div className="flex flex-col justify-center gap-6 py-6">
      <h2 className="font-bold text-3xl">Card</h2>
      <h3 className="font-bold text-xl">Card sizes</h3>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg">Small</h3>
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="This is my card"
          subTitle="Card subtitle"
          body={<p>Im the body</p>}
          footer={<p>im the footer</p>}
        />
        <h3 className="font-bold text-lg">Medium</h3>

        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="md"
          title="This is my card"
          subTitle="Card subtitle"
          body={<p>Im the body</p>}
          footer={<p>im the footer</p>}
        />
        <h3 className="font-bold text-lg">Large</h3>

        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="lg"
          title="This is my card"
          subTitle="Card subtitle"
          body={<p>Im the body</p>}
          footer={<p>im the footer</p>}
        />
      </div>
      <h3 className="font-bold text-xl">Card props</h3>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg">Optional header</h3>
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          subTitle="Card subtitle"
          body={<p>Im the body</p>}
          footer={<p>im the footer</p>}
        />
        <h3 className="font-bold text-lg">Optional subtitle</h3>
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="This is my card"
          body={<p>Im the body</p>}
          footer={<p>im the footer</p>}
        />
        <h3 className="font-bold text-lg">Optional body</h3>
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="This is my card"
          subTitle="Card subtitle"
          footer={<p>im the footer</p>}
        />
        <h3 className="font-bold text-lg">Optional footer</h3>
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="This is my card"
          subTitle="Card subtitle"
          body={<p>Im the body</p>}
        />
        <h3 className="font-bold text-lg">Optional image</h3>
        <Card
          size="sm"
          title="This is my card"
          subTitle="Card subtitle"
          footer={<p>im the footer</p>}
        />
      </div>
      <h3 className="font-bold text-xl">Styled Card borders</h3>

      <div className="flex flex-wrap gap-4">
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="Default"
          subTitle="Card subtitle"
          body={<p>I'm a card with default border</p>}
          footer={<p>im the footer</p>}
          borderStyle="default"
        />
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="Outlined"
          subTitle="Card subtitle"
          body={<p>I'm a card with outlined border</p>}
          footer={<p>im the footer</p>}
          borderStyle="outlined"
        />
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="Dashed"
          subTitle="Card subtitle"
          body={<p>I'm a card with dashed border</p>}
          footer={<p>im the footer</p>}
          borderStyle="dashed"
        />
        <Card
          imageSrc="https://ricekrisbs.gallerycdn.vsassets.io/extensions/ricekrisbs/pokemon-lorem-ipsum/0.0.1/1749272806144/Microsoft.VisualStudio.Services.Icons.Default"
          size="sm"
          title="None"
          subTitle="Card subtitle"
          body={<p>I'm a card with none border</p>}
          footer={<p>im the footer</p>}
          borderStyle="none"
        />
      </div>
    </div>
  );
}
