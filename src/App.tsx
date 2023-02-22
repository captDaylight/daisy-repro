import Button from './atoms/Button';

const App = () => {
  return (
    <article class="prose lg:prose-lg p-4">
      <h2 class="mb-0">Button</h2>
      <h3>Styles</h3>

      <div class="flex flex-wrap items-center justify-left gap-2 overflow-x-hidden bg-top">
        <Button style="primary">Primary Button</Button>
        <Button style="secondary">Secondary Button</Button>
        <Button style="accent">Accent Button</Button>
        <Button style="info">Info Button</Button>
        <Button style="success">Success Button</Button>
        <Button style="warning">Warning Button</Button>
        <Button style="error">Error Button</Button>
        <Button style="ghost">Ghost Button</Button>
        <Button style="link">Link Button</Button>
      </div>
    </article>
  );
};

export default App;
