#rush 命令
#rush init
初始化项目

#给项目中添加依赖
rush update #给项目中添加指定包
rush add -p **_  
#给每个项目中添加指定包
rush add -p _** --all #提交发包
rush change #提交包到仓库中
rush publish --apply --target-branch main --publish
