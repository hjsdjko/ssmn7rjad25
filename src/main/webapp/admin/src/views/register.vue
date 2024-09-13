<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230809/140e1432901b4549a1296c3e05bf0211.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"0px solid #f6f6f6","padding":"20px 20px 20px","boxShadow":"0 0px 0px rgba(0, 0, 0, .2)","margin":"0 auto","borderRadius":"0px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230809/27ba6760569d4edeb0f660e697d9da29.png) no-repeat center top / 100% 100%","width":"40%","fontSize":"16px","position":"relative","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"0px","margin":"20px auto 30px","borderColor":"#eee","color":"#333f88","background":"none","borderWidth":"0px","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"26px","borderStyle":"solid","fontWeight":"600"}' class="title">基于SSM的养老院管理系统的设计与实现注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
					<el-input  v-model="ruleForm.yonghuzhanghao"  autocomplete="off" placeholder="用户账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
					<el-input  v-model="ruleForm.yonghuxingming"  autocomplete="off" placeholder="用户姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('yonghudianhua')?'required':''">用户电话：</div>
					<el-input  v-model="ruleForm.yonghudianhua"  autocomplete="off" placeholder="用户电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model.number="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='hugong'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('zhanghao')?'required':''">账号：</div>
					<el-input  v-model="ruleForm.zhanghao"  autocomplete="off" placeholder="账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='hugong'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='hugong'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='hugong'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xingming')?'required':''">姓名：</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='hugong'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="hugongtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='hugong'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in hugongxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 10px","textAlign":"left","width":"50%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='hugong'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"#666","textAlign":"right","left":"-180px","width":"180px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<button :style='{"border":"1px solid #fff","cursor":"pointer","padding":"0 0 0 30px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"30px auto 5px","color":"#fff","display":"block","letterSpacing":"10px","outline":"none","borderRadius":"0px","background":"#333f88","width":"50%","fontSize":"20px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px 0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"50%","lineHeight":"1","fontSize":"16px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            hugongxingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					yonghuzhanghao: '',
					mima: '',
					yonghuxingming: '',
					xingbie: '',
					touxiang: '',
					yonghudianhua: '',
					nianling: '',
				}
			}
			if(this.tableName=='hugong'){
				this.ruleForm = {
					zhanghao: '',
					mima: '',
					xingming: '',
					touxiang: '',
					xingbie: '',
					lianxidianhua: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',')
			this.hugongxingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        hugongtouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
						this.$message.error(`用户账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`yonghu` == this.tableName && this.ruleForm.yonghudianhua &&(!this.$validate.isMobile(this.ruleForm.yonghudianhua))){
						this.$message.error(`用户电话应输入手机格式`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.nianling &&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `hugong` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`hugong` == this.tableName && this.ruleForm.lianxidianhua &&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230809/140e1432901b4549a1296c3e05bf0211.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0px 0px rgba(60, 60, 60, .1);
						outline: none;
						color: #666;
						background: none;
						width: calc(100% - 0px);
						font-size: 16px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0px 0px rgba(60, 60, 60, .1);
						outline: none;
						color: #666;
						background: none;
						width: 100%;
						font-size: 16px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0px 0px rgba(60, 60, 60, .1);
						outline: none;
						color: #666;
						background: none;
						width: 288px;
						font-size: 16px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0px 0px rgba(60, 60, 60, .1);
						outline: none;
						color: #666;
						background: none;
						width: 288px;
						font-size: 16px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  color: #bbb;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  line-height: 80px;
		  		  border-radius: 0px;
		  		  box-shadow: 0 0px 0px rgba(60, 60, 60, .1);
		  		  background: none;
		  		  width: 160px;
		  		  border-width: 1px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  color: #bbb;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  line-height: 80px;
		  		  border-radius: 0px;
		  		  box-shadow: 0 0px 0px rgba(60, 60, 60, .1);
		  		  background: none;
		  		  width: 160px;
		  		  border-width: 1px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  color: #bbb;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  line-height: 80px;
		  		  border-radius: 0px;
		  		  box-shadow: 0 0px 0px rgba(60, 60, 60, .1);
		  		  background: none;
		  		  width: 160px;
		  		  border-width: 1px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				position: absolute;
				right: 5px;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
