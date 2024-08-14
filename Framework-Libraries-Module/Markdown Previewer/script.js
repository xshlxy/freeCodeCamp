document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    // Initialize the marked library with a custom renderer
    const renderer = new marked.Renderer();

    // Customize the renderer to handle line breaks
    renderer.paragraph = function(text) {
        return `<p>${text.replace(/\n/g, '<br>')}</p>`;
    };

    // Set up marked with the custom renderer
    marked.setOptions({
        renderer: renderer
    });

    // Initial Markdown content
    const defaultMarkdown = `
# Heading

## Subheading

[Link](https://www.example.com)

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item

> Blockquote

![Alt text](https://via.placeholder.com/150)

**Bold text**
    `;

    // Set default Markdown content
    editor.value = defaultMarkdown;
    preview.innerHTML = marked.parse(defaultMarkdown);

    // Update preview when editor content changes
    editor.addEventListener('input', () => {
        preview.innerHTML = marked.parse(editor.value);
    });
});