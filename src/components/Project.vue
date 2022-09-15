<template>
  <div>
    <h2 class="text-2xl mb-5 font-bold">📦️ 项目经历</h2>

    <div class="flex justify-between mb-10">
      <div class="max-w-xl">
        <h4 class="text-xl font-bold">itm 运维管理平台</h4>
        <div class="p-2 pl-5">
          <p>
            <b>项目介绍：</b> <br />该项目承载移动 7000余台 BOSS,CRM
            核心业务机器的监控管理功能;<br />
            该项目前端使用 AntD Pro Vue , 后端使用第三方开源组件 zabbix
            提供监控数据采集,
          </p>
          <p>
            <b> 主要负责: </b>
          </p>
          <ul class="list-disc pl-10">
            <li>
              负责对"任务下发"模块的实现, 下发用户指定的脚本至用户指定的主机,
              并返回脚本的执行情况
            </li>
            <li>
              负责对"告警列表"模块的实现, 对 zabbix
              采集到不同等级的告警进行分类展示, 实现前端导出 Excel 文件功能
            </li>
            <li>负责"资产管理"模块的实现, 实现前端导入导出 Excel 文件功能</li>
            <li>实现"性能监控"模块, 对 zabbix 采集的性能数据实现图表展示</li>
            <li>负责业务需求评审、设计并实现解决方案</li>
          </ul>
        </div>
      </div>
      <div>
        <b>🪜 技术栈: </b>
        <ul class="list-disc pl-10">
          <li>AntD Pro Vue2</li>
          <li>xlsx</li>
          <li>axios</li>
          <li>ViserJS</li>
        </ul>
      </div>
    </div>

    <div class="flex justify-between mb-10">
      <div class="max-w-lg">
        <h4 class="text-xl font-bold">Walkie-Talkie</h4>
        <div class="p-2 pl-5">
          <p>
            <b>项目介绍：</b>该项目为语音聊天室的原型, 使用 firebase 及 OAuth2
            完成了用户身份信息确定, 使用 FireStore 完成了聊天信息的存储, 使用
            Vuefire 完成了数据库与 Vue 的数据实时绑定
          </p>
          <p>
            <b> 项目地址: </b>
            <a
              target="_blank"
              class="text-neutral-500"
              href="https://walkie-talkie.alex7777.club"
              >https://walkie-talkie.alex7777.club</a
            >
          </p>
          <p>
            <b> 仓库地址: </b>
            <a
              target="_blank"
              class="text-neutral-500"
              href="https://github.com/Alexie7777/Vue2-Walkie-Talkie"
              >https://github.com/Alexie7777/Vue2-Walkie-Talkie</a
            >
          </p>
        </div>
      </div>
      <div>
        <b>🪜 技术栈: </b>
        <ul class="list-disc pl-10">
          <li>Vue2 + TS</li>
          <li>VueFire</li>
          <li>tailwindcss</li>
          <li>firebase auth</li>
          <li>firestore</li>
        </ul>
      </div>
    </div>

    <div class="flex justify-between mb-10">
      <div class="max-w-lg">
        <h4 class="text-xl font-bold">YouTube Clone</h4>
        <div class="p-2 pl-5">
          <p>
            <b>项目介绍：</b>该项目使用 React + material-ui 来对 YouTube
            页面进行响应式重构, 使用 React-Router 实现了路由跳转
          </p>
          <p>
            <b> 项目地址: </b>
            <a
              target="_blank"
              class="text-neutral-500"
              href="https://youtube.alex7777.club"
              >https://youtube.alex7777.club</a
            >
          </p>
          <p>
            <b> 仓库地址: </b>
            <a
              target="_blank"
              class="text-neutral-500"
              href="https://github.com/Alexie7777/YouTube-Clone"
              >https://github.com/Alexie7777/YouTube-Clone</a
            >
          </p>
        </div>
      </div>
      <div>
        <b>🪜 技术栈: </b>
        <ul class="list-disc pl-10">
          <li>React + TS</li>
          <li>React-Router</li>
          <li>material-ui</li>
          <li>axios</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
