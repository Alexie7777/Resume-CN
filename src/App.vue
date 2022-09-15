<template>
  <div>
    <button class="btn-hover color-1 absolute right-72">
      <a
        style="text-decoration: none"
        download="resume.pdf"
        href="/public/Resume.pdf"
        >保存为 PDF
      </a>
    </button>
    <div class="flex justify-center items-center">
      <div class="m-10 text-neutral-600 max-w-4xl">
        <div class="flex justify-between">
          <div>
            <img
              width="150"
              class="mb-5"
              src="@/assets/licence_photo.jpg"
              alt="License Photo"
            />
            <h1 class="font-bold text-3xl">高梓洋</h1>
            <h3 class="text-neutral-500">web 前端工程师</h3>
          </div>

          <div class="flex justify-end gap-1 flex-col">
            <div class="flex justify-start items-center gap-2">
              <font-awesome-icon icon="fa-solid fa-mobile-screen" />
              <button @click="onCopy">+86 130 0687 1204</button>
            </div>
            <div class="flex justify-start items-center gap-2">
              <font-awesome-icon icon="fa-solid fa-at" />
              <button @click="onCopy">alex7777@alex7777.club</button>
            </div>
            <div class="flex justify-start items-center gap-2">
              <font-awesome-icon icon="fa-brands fa-github" />
              <a
                target="_blank"
                class="text-neutral-500"
                href="https://github.com/Alexie7777"
                >https://github.com/Alexie7777</a
              >
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h2 class="text-2xl mb-5 font-bold">🆙 职业经历</h2>

          <div class="flex gap-20">
            <div class="flex flex-col">
              <p>2021.05</p>
              <p>至</p>
              <p>2022.06</p>
            </div>

            <div class="flex ml-36 mr-auto flex-col gap-1 mb-5">
              <h4 class="text-xl font-bold">前端开发 & Linux 运维工程师</h4>
              <p>广东丰德科技有限公司</p>
              <p class="max-w-md pl-5 text-neutral-500">
                驻场中国移动广东分公司，负责运维监控系统前端搭建、可复用组件方案指定、性能优化等相关工作；<br />负责zabbix
                监控部署及系统权限配置，zabbix
                平台监控的采数逻辑及监控项优化；<br />
              </p>
            </div>
          </div>

          <div class="flex gap-20">
            <div class="flex flex-col">
              <p>2020.06</p>
              <p>至</p>
              <p>2021.05</p>
            </div>

            <div class="flex ml-36 mr-auto flex-col gap-1 mb-10">
              <h4 class="text-xl font-bold">服务器硬件工程师</h4>
              <p>广东丰德科技有限公司</p>
              <p class="max-w-md pl-5 text-neutral-500 font-normal">
                负责X86服务器硬件故障的快速定位及处理；<br />负责X86服务器的上架及系统安装、配置；<br />负责X86服务器阵列卡的配置；<br />负责X86服务器备件的测试和评估
              </p>
            </div>
          </div>
        </div>

        <hr />

        <Project />

        <hr />

        <div>
          <h2 class="text-2xl mb-5 font-bold">🧑‍💻 个人评价</h2>
          <ul class="list-disc pl-10">
            <li>熟悉 Vue, React, HTML5，CSS3，AJAX 等前端技术</li>
            <li>熟悉 JavaScript，了解 TypeScript，掌握 ES6 以上常用语法</li>
            <li>熟悉前端工程化、Git，熟悉 Webpack、Vite构建工具的原理</li>
            <li>拥有敏感的技术嗅觉，对新技术有好奇心</li>
            <li>熟悉终端环境，热衷于 CLI、TUI 工作环境</li>
            <li>拥有较好的英语读写能力</li>
            <li>熟悉类 Figma UI 设计协作工具</li>
            <li>
              工作踏实认真，吃苦耐劳，责任心强，具备良好的沟通协作能力，有团队合作精神
            </li>
          </ul>
        </div>
        <hr />

        <div>
          <h2 class="text-2xl mb-5 font-bold">📚 教育经历</h2>

          <div class="flex gap-10">
            <div class="flex flex-col gap-1">
              <p class="font-semibold">电子科技大学中山学院</p>
              <p>电子科学与技术专业</p>
              <p class="text-neutral-500">2020届学士学位</p>
            </div>

            <div class="max-w-md">
              <ul class="list-disc text-neutral-500 pl-10">
                <li>
                  在校期间参加赴美带薪项目，快速融入当地文化，英语读写能力得到锻炼，实习结束获得优秀实习生奖项
                </li>
                <li>
                  在校期间帮助学院建立并担任院女篮球队教练，并在次年夺得院长杯第5名战绩
                </li>
              </ul>
            </div>

            <div class="max-w-sm">
              <h4 class="font-semibold">技能证书</h4>
              <ul class="list-disc text-neutral-400 pl-10">
                <li>CET6</li>
                <li>Google Technical Support Certificate</li>
                <li>GCP Fundamentals- Core Infrastructure Certificate</li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <footer>
          <p class="text-neutral-400 text-center">
            Copyright &copy;2022
            <a style="text-decoration: none" href="https://resume.alex7777.club"
              >resume.alex7777.club</a
            >
            All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useToast } from "vue-toast-notification";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
import Project from "@/components/Project.vue";

const $toast = useToast();

function onCopy(e: MouseEvent) {
  console.log(e);
  const button = e.target as HTMLButtonElement;
  toClipboard(button.innerText);
  $toast.success("复制成功");
}
</script>

<style>
hr {
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

a {
  text-decoration: underline;
}

.btn-hover {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.color-1 {
  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}
</style>
