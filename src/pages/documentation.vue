<template>
  <div class="text-left pt-24">
    <div>
      <h3>Installation</h3>
      <ul>
        <li>
          <div class="inline-flex flex-col w-10/12 lg:w-3/4">
            <p class="opacity-100">Clone the repository and install the dependencies:</p>
            <CodeBlock class="mt-1"
              >git clone https://github.com/jsulpis/nuxtjs-template.git && cd nuxtjs-template && yarn
            </CodeBlock>
          </div>
        </li>
        <li>Update the <span class="filename">package.json</span> metadata with yours.</li>
      </ul>

      <h3>Configuration</h3>
      <h4>Tailwind CSS</h4>
      <ul>
        <li>
          You may want to change the theme in
          <span class="filename">tailwind.config.js</span> to use your own color palette.
        </li>
        <li>
          See the
          <a href="https://tailwindcss.com/docs/theme">documentation</a> for more details.
        </li>
      </ul>

      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTNyB0zgiJuR-VbJy-B9COoaVl81dld6Ahhx6Q1CDPXtCX7RykgotC2q-JfI2Ibg7AeBtRhN3xC8vqk/embed?start=false&loop=true&delayms=5000"
        frameborder="0"
        width="500"
        height="250"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script>
import CodeBlock from "@/components/docs/CodeBlock.vue";

export default {
  components: {
    CodeBlock
  }
};
</script>

<style lang="scss" scoped>
ul {
  @apply leading-relaxed opacity-90;
}

li {
  @apply list-disc list-inside;
}

a {
  @apply text-orange-500 font-semibold;

  &:hover {
    @apply opacity-75;
  }
}

.filename {
  @apply font-mono text-sm;
}
</style>
