<template>
  <div class="m-10">
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
          <p>+86 130 0687 1204</p>
        </div>
        <div class="flex justify-start items-center gap-2">
          <font-awesome-icon icon="fa-solid fa-at" />
          <p>alex7777@alex7777.club</p>
        </div>
        <div class="flex justify-start items-center gap-2">
          <font-awesome-icon icon="fa-brands fa-github" />
          <a href="https://github.com/Alexie7777"
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
          <p>2020.06</p>
          <p>至</p>
          <p>2021.05</p>
        </div>

        <div class="flex ml-36 mr-auto flex-col gap-1 mb-10">
          <h4 class="text-xl font-bold">服务器硬件工程师</h4>
          <p>广东丰德科技有限公司</p>
          <p class="max-w-md pl-5 text-neutral-500">
            负责X86服务器硬件故障的快速定位及处理；<br />负责X86服务器的上架及系统安装、配置；<br />负责X86服务器阵列卡的配置；<br />负责X86服务器备件的测试和评估
          </p>
        </div>
      </div>

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
            监控部署及系统权限配置，zabbix 平台监控的采数逻辑及监控项优化；<br />
          </p>
        </div>
      </div>
    </div>

    <hr />

    <div>
      <h2 class="text-2xl mb-5 font-bold">📦️ 项目经历</h2>

      <div class="flex justify-between">
        <div class="max-w-lg">
          <h4 class="text-xl font-bold">itm 运维管理平台</h4>
          <p>
            <b>项目介绍：</b>该项目前端使用 AntD Pro Vue ,
            后端使用第三方开源组件 zabbix 提供监控数据采集,
          </p>
          <p>
            <b> 主要负责: </b>
          </p>
          <ul class="list-disc pl-10">
            <li>
              负责对"告警列表"模块的实现, 对不同等级的告警进行分类展示,
              实现前端导出 Excel 文件功能
            </li>
            <li>负责"资产管理"模块的实现, 实现前端导入导出 Excel 文件功能</li>
            <li>实现"性能监控"模块, 对 zabbix 采集的性能数据实现图表展示</li>
            <li>负责业务需求评审、设计并实现解决方案</li>
          </ul>
        </div>
        <div>
          <b>技术栈: </b>
          <ul>
            <li>AntD Pro Vue2</li>
            <li>xslx</li>
            <li>axios</li>
            <li>ViserJS</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style scoped>
hr {
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
