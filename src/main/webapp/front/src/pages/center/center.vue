<template>
<div class="center-preview" :style='{"padding":"0 7%","margin":"20px auto 40px","flexWrap":"wrap","background":"none","display":"block","width":"100%","position":"relative","justifyContent":"space-between"}'>
	<div class="title" :style='{"padding":"12px 0 0","margin":"0px auto","color":"#1b394c","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231009/8f2613f5f198426ab730d135e0a2e138.png) no-repeat 120px center","width":"100%","fontSize":"24px","fontWeight":"600","height":"60px"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"50px 20px 10px","boxShadow":"0 0px 0px rgba(0, 0, 0, 0.3)","margin":"20px 0 0 0","borderColor":"#28890b20","alignItems":"center","display":"flex","right":"7%","borderRadius":"0px","flexWrap":"wrap","background":"#fff","borderWidth":"0px","width":"calc(86% - 260px)","position":"absolute","borderStyle":"solid","height":"auto","order":"2"}'>
		<div :style='{"padding":"8px 30px","borderColor":"#eee","margin":"0 20px 0 0","color":"#fff","letterSpacing":"0px","borderRadius":"0 0 6px 6px","top":"0","borderWidth":"0px","background":"#1e3c4f","width":"auto","lineHeight":"1.5","fontSize":"16px","position":"absolute","borderStyle":"solid","fontWeight":"600","height":"auto"}'>个人信息</div>
		<div :style='{"width":"auto","borderColor":"#1abc9e20","fontSize":0,"borderStyle":"solid","borderWidth":"0 0 0px 0","height":"auto"}' v-if="userTableName=='yonghu'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"90px","borderStyle":"solid","height":"90px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"width":"auto","borderColor":"#1abc9e20","fontSize":0,"borderStyle":"solid","borderWidth":"0 0 0px 0","height":"auto"}' v-if="userTableName=='hugong'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"90px","borderStyle":"solid","height":"90px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>用户账号</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.yonghuzhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>用户姓名</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.yonghuxingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>性别</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>用户电话</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.yonghudianhua}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>年龄</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.nianling}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='hugong'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>账号</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.zhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='hugong'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>姓名</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.xingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='hugong'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>性别</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#1abc9e20","margin":"0 auto","borderWidth":"0 0 0px 0","display":"flex","width":"auto","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='hugong'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#666","margin":"0 10px 0 0","fontSize":"14px"}'>联系电话</div>
			<div :style='{"fontSize":"14px","color":"#999","textAlign":"left","flex":1}'>{{sessionForm.lianxidianhua}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"width":"100%","margin":"20px 0 0","background":"none"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="100px">
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="sessionForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="用户姓名" prop="yonghuxingming">
            <el-input v-model="sessionForm.yonghuxingming" placeholder="用户姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="yonghutouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="用户电话" prop="yonghudianhua">
            <el-input v-model="sessionForm.yonghudianhua" placeholder="用户电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="年龄" prop="nianling">
            <el-input v-model="sessionForm.nianling" placeholder="年龄" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='hugong'" label="账号" prop="zhanghao">
            <el-input v-model="sessionForm.zhanghao" placeholder="账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='hugong'" label="姓名" prop="xingming">
            <el-input v-model="sessionForm.xingming" placeholder="姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='hugong'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="hugongtouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='hugong'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' v-if="userTableName=='hugong'" label="联系电话" prop="lianxidianhua">
            <el-input v-model="sessionForm.lianxidianhua" placeholder="联系电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"8px","background":"#1e3c4f","width":"110px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"1px solid #1e3c4f","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#1e3c4f","borderRadius":"8px","background":"none","width":"110px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="100px">
			<el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0px","margin":"0 0 40px","background":"none","display":"inline-block"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"8px","background":"#1e3c4f","width":"110px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'yonghuzhanghao', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'yonghuxingming', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'yonghudianhua', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'nianling', null);
		}
		if ('hugong' == this.userTableName) {
			this.$set(this.sessionForm, 'zhanghao', null);
		}
		if ('hugong' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('hugong' == this.userTableName) {
			this.$set(this.sessionForm, 'xingming', null);
		}
		if ('hugong' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('hugong' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('hugong' == this.userTableName) {
			this.$set(this.sessionForm, 'lianxidianhua', null);
		}

		if ('yonghu' == this.userTableName&&this.rules['yonghuzhanghao']){
			this.rules['yonghuzhanghao'].push({ required: true, message: '请输入用户账号', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['yonghuzhanghao']) {
			this.$set(this.rules, 'yonghuzhanghao', [{ required: true, message: '请输入用户账号', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'yonghudianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'nianling', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('hugong' == this.userTableName) {
			this.$set(this.rules, 'lianxidianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('yonghu' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('hugong' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`yonghu` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`hugong` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      yonghutouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      hugongtouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.passwordForm.newpassword == this.passwordForm.password) {
						this.$message.error("新密码与原密码相同！");
						return;
					}
					if (this.userTableName == 'yonghu') {
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 0px;
	margin: 0;
	background: #fff;
	width: 230px;
	border-color: #28890b20;
	border-width: 0 0 0px;
	position: relative;
	border-style: solid;
	float: left;
	text-align: center;
	height: auto;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	padding: 0 10px;
  	margin: 0 10px 0 0;
  	color: #666;
  	background: none;
  	font-weight: 500;
  	display: block;
  	width: 100%;
  	font-size: 16px;
  	line-height: 60px;
  	position: relative;
  	text-align: center;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #fff;
  	background: #1e3c4f;
  	font-weight: 600;
  	font-size: 16px;
  	line-height: 60px;
  	position: relative;
  	text-align: center;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 10px;
  	margin: 0 10px 0 0;
  	color: #fff;
  	background: #1e3c4f;
  	font-weight: 600;
  	display: inline-block;
  	width: 100%;
  	font-size: 16px;
  	line-height: 60px;
  	position: relative;
  	text-align: center;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	padding: 0px;
  	margin: 200px 0 0;
  	background: none;
  	width: calc(100% - 230px);
  	float: right;
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 100px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 100px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 30px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 400px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 30px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 400px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	padding: 0 10px 0 30px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 30px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 400px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	cursor: pointer;
  	color: #666;
  	font-weight: 600;
  	font-size: 24px;
  	border-color: #eee;
  	line-height: 50px;
  	border-radius: 30px;
  	background: #fff;
  	width: 400px;
  	border-width: 0px;
  	border-style: solid;
  	text-align: center;
  	height: 50px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border-radius: 30px;
  	padding: 0 12px;
  	color: #666;
  	background: #fff;
  	display: inline-block;
  	width: auto;
  	font-size: 14px;
  	border-color: #eee;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 36px;
  }
</style>
