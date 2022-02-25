<script lang="ts">
export default {
  data() {
    return {
      packageJson: undefined
    }
  },
  methods: {
    fetchPackageJson() {
      const packageJsonUrl = "https://raw.githubusercontent.com/StefanH-AT/Source-Engine-VSCode-Extension/master/package.json";
      fetch(packageJsonUrl)
          .then(response => response.json())
          .then(pkg => this.packageJson = pkg);
    }
  },
  created() {
    this.fetchPackageJson();
  }
}
</script>

<template>
  <main>
    <div class="cover">

      <header class="banner">
        <div class="banner-content section-container">

          <h1>Source Engine Support <br><small>for Visual Studio Code</small></h1>

          <div class="banner-description">
            <p>Edit Source Engine files with intelligent language features and tools.</p>
          </div>

          <div class="banner-downloads">
            <a class="btn btn-dark" href="https://marketplace.visualstudio.com/items?itemName=stefan-h-at.source-engine-support">Download</a>
            <a class="btn btn-outline" href="https://github.com/StefanH-AT/Source-Engine-VSCode-Extension">Source Code</a>
          </div>

          <div class="banner-version" v-if="packageJson && packageJson.version"><!--
          <div>
            <a href="https://github.com/StefanH-AT/Source-Engine-VSCode-Extension/actions/workflows/test.yml">
              <img src="https://github.com/StefanH-AT/Source-Engine-VSCode-Extension/actions/workflows/test.yml/badge.svg" alt="CI Test"/>
            </a>
            <a href="https://github.com/StefanH-AT/Source-Engine-VSCode-Extension/actions/workflows/deploy.yml">
              <img src="https://github.com/StefanH-AT/Source-Engine-VSCode-Extension/actions/workflows/deploy.yml/badge.svg" alt="Continuous Deployment"/>
            </a>
          </div>-->
            <span>Version {{ packageJson.version }}</span>
          </div>

        </div>
      </header>

      <div class="showcase">
        <img src="img/vmt_sample1.png"
             alt="Screenshot of Source Engine Support extension"
             class="showcase-img"
             preload/>
      </div>
    </div>
    <article class="section-container">

      <div class="features">
        <h2>Features</h2>

        <div class="feature">
          <h3>Keyvalue Linting</h3>
          <h4></h4>
        </div>

        <div class="feature">
          <h3>VMT Files</h3>
          <h4>Shader parameter autocompletion</h4>
          <div class="feature-listing">
            <div class="feature-listing-img">
              <img src="img/vmt_hover.png" alt="Hover inspection"/>
            </div>
            <div class="feature-listing-description">
              <h4>Hover inspection</h4>
              <p>Get help and further information about shader parameters.</p>
            </div>
          </div>
          <h4>Color Preview</h4>
          <div class="feature-listing">
            <div class="feature-listing-img">
              <img src="img/vmt_duplicate.png" alt="Detect duplicate parameters"/>
            </div>
            <div class="feature-listing-description">
              <h4>Detect repeating parameters</h4>
              <p>Duplicate keys are detected and pointed out to avoid overriding issues</p>
            </div>
          </div>

        </div>

        <div class="feature">
          <h3>QC Files</h3>
          <h4>Compilation</h4>
        </div>

        <div class="feature">
          <h3>Caption Files</h3>
          <h4>Compilation</h4>
          <h4>Markup</h4>
          <h4>Color preview</h4>
        </div>

        <div class="feature">
          <h3>FGD Files</h3>
        </div>

        <div class="feature">
          <h3>Lights.rad Files</h3>
        </div>

        <div class="feature">
          <h3>Config Files</h3>
        </div>

      </div>
    </article>
  </main>
</template>

<style lang="scss">
.cover {
  display: flow-root;
  min-height: 100vh;
}
.section-container {
  max-width: min(92%, 60rem);
  margin-left: auto;
  margin-right: auto;
}
.banner {
  margin-top: 2rem;
  background-color: var(--color-main);
  box-shadow: 0 0.25rem 1.75rem var(--scheme-shade-9);

  & *::selection {
    background: var(--scheme-background);
    color: var(--color-main);
  }
}

.banner-content {
  padding-block: 5rem;

  > * {
    color: var(--scheme-background);
  }

  h1 {
    line-height: 0.2;
    margin: 0;
    font-size: min(8vw, 5rem);
    small {
      font-size: 0.45em;
    }
  }
}

.banner-description {
  margin-block: 2rem;
  > p {
    margin-bottom: 0;
  }
}

.banner-downloads {

  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  > .btn {
    --btn-color: var(--scheme-background);
    --btn-font-size: 1.1em;
    font-weight: bold;
    margin: 0;

    flex-basis: 10rem;
    text-align: center;
  }
  > .btn-dark {
    --btn-text-color: var(--color-main);
  }
}

.banner-version {
  margin-top: 0.75rem;
}

.showcase {
  display: flex;
  justify-content: center;
}

.showcase-img {
  max-width: 100%;
  box-shadow: 0 0.1rem 1.5rem 0 var(--scheme-shade-9);
  margin-top: -4rem;
  border-radius: var(--border-radius);
}

.features {
  margin-top: 2rem;

  h2 {
    font-size: 1.2em;
  }
}

.feature {
  margin-block: 3rem;

  h3 {
    font-size: 2.4em;
    background: var(--color-main);
    padding: 0.5rem;
    color: var(--scheme-background);
    text-transform: uppercase;

    &::selection {
      background: var(--scheme-background);
      color: var(--color-main);
    }
  }
  h4 {
    font-size: 1.75em;
    margin-bottom: 0.5rem;
  }
}

.feature-listing {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  padding-block: 0.5rem;

  margin-top: 1.5rem;

  > .feature-listing-img {
    flex-basis: 30rem;
    > img {
      width: 100%;
    }
  }

  > .feature-listing-description {

  }
}
</style>
