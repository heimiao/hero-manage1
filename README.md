# 本项目快速启动
进入hero-manage1文件下启动gitbash命令窗口
第一步  

    npm install

第二步  

	npm start

如果你不喜欢本项目想自己搭建一个新的，可以用以下办法**Angular快速启动代码**创建一个新的angular2项目。

# Angular快速启动代码  

##步骤1. 设置开发环境

	请先在终端/控制台窗口中运行命令 node -v 和 npm -v，来验证一下你正在运行 
	node 6.9.x 和 npm 3.x.x 以上的版本。更老的版本可能会出现错误，更新的版本则没问题。

然后全局安装 Angular CLI 。

	npm install -g @angular/cli

##步骤2. 创建新项目

运行下列命令来生成一个新项目以及应用的骨架代码：

	ng new my-app

##步骤3. 启动开发服务器

	cd my-app
	ng serve --open

ng serve命令会启动开发服务器，监听文件变化，并在修改这些文件时重新构建此应用。

使用--open（或-o）参数可以自动打开浏览器并访问http://localhost:4200/。

本应用会用一条消息来跟你打招呼：


##步骤4. 编辑我们的第一个Angular组件
这个CLI为我们创建了第一个Angular组件。 它就是名叫app-root的根组件。 你可以在./src/app/app.component.ts目录下找到它。

打开这个组件文件，并且把title属性从 app works! 改为 My First Angular App ：

	export class AppComponent {
	  title = 'My First Angular App';
	}