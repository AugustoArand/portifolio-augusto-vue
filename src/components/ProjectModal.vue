<template>
  <a-modal
    :open="visible"
    :footer="null"
    :width="760"
    centered
    @cancel="$emit('close')"
    class="project-modal"
    wrapClassName="project-modal-wrap"
  >
    <div v-if="project" class="modal-content">
      <!-- Gallery -->
      <div class="gallery-wrap">
        <a-carousel arrows autoplay :dots="hasMultipleImages">
          <!-- Primary image always shown -->
          <div class="gallery-slide">
            <img :src="project.image" :alt="project.title" class="gallery-img" />
          </div>
          <!-- Extra gallery images (optional) -->
          <div v-for="(img, i) in project.gallery" :key="i" class="gallery-slide">
            <img :src="img" :alt="`${project.title} – foto ${i + 2}`" class="gallery-img" />
          </div>
          <template #prevArrow>
            <div class="carousel-arrow carousel-arrow-left">
              <LeftOutlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="carousel-arrow carousel-arrow-right">
              <RightOutlined />
            </div>
          </template>
        </a-carousel>
      </div>

      <!-- Info -->
      <div class="modal-info">
        <div class="project-tags">
          <span v-for="t in project.tags" :key="t" class="tech-tag">{{ t }}</span>
        </div>

        <h2 class="modal-title">{{ project.title }}</h2>
        <p class="modal-desc">{{ project.description }}</p>

        <div class="modal-actions">
          <a
            v-if="project.link && project.link !== '#'"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn action-btn--primary"
          >
            <EyeOutlined /> Ver Projeto
          </a>
          <a
            v-if="project.repoUrl"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn action-btn--secondary"
          >
            <GithubOutlined /> Ver Repositório
          </a>
          <span v-if="isPrivate" class="private-badge">
            <LockOutlined /> Repositório Privado
          </span>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
import { computed } from 'vue'
import {
  EyeOutlined,
  GithubOutlined,
  LockOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons-vue'

export default {
  name: 'ProjectModal',
  components: { EyeOutlined, GithubOutlined, LockOutlined, LeftOutlined, RightOutlined },
  props: {
    visible: { type: Boolean, default: false },
    project: { type: Object, default: null },
  },
  emits: ['close'],
  setup(props) {
    const hasMultipleImages = computed(
      () => props.project?.gallery && props.project.gallery.length > 0,
    )
    const isPrivate = computed(
      () => !props.project?.repoUrl && props.project?.title?.includes('[PRIVADO]'),
    )
    return { hasMultipleImages, isPrivate }
  },
}
</script>

<style>
.project-modal-wrap .ant-modal-content {
  background: #111 !important;
  border: 1px solid rgba(66, 185, 131, 0.2);
  border-radius: 20px !important;
  padding: 0 !important;
  overflow: hidden;
}

.project-modal-wrap .ant-modal-close {
  color: rgba(255, 255, 255, 0.6);
  top: 12px;
  right: 12px;
}

.project-modal-wrap .ant-modal-close:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.project-modal-wrap .ant-modal-body {
  padding: 0 !important;
}
</style>

<style scoped>
.modal-content {
  display: flex;
  flex-direction: column;
}

/* ── Gallery ─────────────────────────────────── */
.gallery-wrap {
  width: 100%;
  background: #0a0a0a;
}

.gallery-slide {
  height: 340px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-arrow {
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;
}

.carousel-arrow:hover {
  background: rgba(66, 185, 131, 0.7);
  border-color: transparent;
}

.carousel-arrow-left {
  left: 12px;
}

.carousel-arrow-right {
  right: 12px;
}

/* ── Info ─────────────────────────────────────── */
.modal-info {
  padding: 1.75rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.2rem 0.7rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(66, 185, 131, 0.35);
  color: #42b983;
  background: rgba(66, 185, 131, 0.08);
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
}

.modal-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin: 0;
}

/* ── Actions ────────────────────────────────────── */
.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action-btn--primary {
  background: #42b983;
  color: #fff;
}

.action-btn--primary:hover {
  background: #34a870;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(66, 185, 131, 0.4);
}

.action-btn--secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.action-btn--secondary:hover {
  border-color: #42b983;
  color: #42b983;
  transform: translateY(-2px);
}

.private-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

@media (max-width: 600px) {
  .gallery-slide {
    height: 220px;
  }

  .modal-info {
    padding: 1.25rem 1.25rem 1.5rem;
  }

  .modal-title {
    font-size: 1.2rem;
  }
}
</style>
