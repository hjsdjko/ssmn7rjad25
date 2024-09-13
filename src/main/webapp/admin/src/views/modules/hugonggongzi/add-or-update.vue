<template>
	<div class="addEdit-block" :style='{"minHeight":"calc(100vh - 200px)","padding":"0px","margin":"0 auto","color":"#666","background":"none","width":"calc(100% - 60px)","fontSize":"16px","height":"100%"}'>
		<el-form
			:style='{"border":"1px solid #ceddee","padding":"30px 10%","boxShadow":"inset 0px 0px 32px 0px #E8EFF7,0 3px 6px 0px rgba(100,100,100,.1)","borderColor":"#ceddee","alignItems":"flex-start","borderRadius":"8px","flexWrap":"wrap","background":"rgba(255,255,255,.9)","borderWidth":"1px","display":"flex","fontSize":"inherit","borderStyle":"double"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="200px"
		>
			<template >
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="select" v-if="type!='info'"  label="月份" prop="yuefen">
					<el-select :disabled="ro.yuefen" v-model="ruleForm.yuefen" placeholder="请选择月份" >
						<el-option
							v-for="(item,index) in yuefenOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="月份" prop="yuefen">
					<el-input v-model="ruleForm.yuefen"
						placeholder="月份" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="select" v-if="type!='info'" label="账号" prop="zhanghao">
					<el-select :disabled="ro.zhanghao" @change="zhanghaoChange" v-model="ruleForm.zhanghao" placeholder="请选择账号">
						<el-option
							v-for="(item,index) in zhanghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.zhanghao" label="账号" prop="zhanghao">
					<el-input v-model="ruleForm.zhanghao" placeholder="账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="姓名" prop="xingming">
					<el-input v-model="ruleForm.xingming" placeholder="姓名" clearable  :readonly="ro.xingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="姓名" prop="xingming">
					<el-input v-model="ruleForm.xingming" placeholder="姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="加班工资" prop="jiabangongzi">
					<el-input-number v-model="ruleForm.jiabangongzi" placeholder="加班工资" :readonly="ro.jiabangongzi"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="加班工资" prop="jiabangongzi">
					<el-input v-model="ruleForm.jiabangongzi" placeholder="加班工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="基本工资" prop="jibengongzi">
					<el-input-number v-model="ruleForm.jibengongzi" placeholder="基本工资" :readonly="ro.jibengongzi"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="基本工资" prop="jibengongzi">
					<el-input v-model="ruleForm.jibengongzi" placeholder="基本工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="绩效奖金" prop="jixiaojiangjin">
					<el-input-number v-model="ruleForm.jixiaojiangjin" placeholder="绩效奖金" :readonly="ro.jixiaojiangjin"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="绩效奖金" prop="jixiaojiangjin">
					<el-input v-model="ruleForm.jixiaojiangjin" placeholder="绩效奖金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="扣款金额" prop="koukuanjine">
					<el-input-number v-model="ruleForm.koukuanjine" placeholder="扣款金额" :readonly="ro.koukuanjine"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="扣款金额" prop="koukuanjine">
					<el-input v-model="ruleForm.koukuanjine" placeholder="扣款金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="其他补助" prop="qitabuzhu">
					<el-input-number v-model="ruleForm.qitabuzhu" placeholder="其他补助" :readonly="ro.qitabuzhu"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="其他补助" prop="qitabuzhu">
					<el-input v-model="ruleForm.qitabuzhu" placeholder="其他补助" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'" label="实发工资" prop="shifagongzi">
					<el-input v-model="shifagongzi" placeholder="实发工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.shifagongzi" label="实发工资" prop="shifagongzi">
					<el-input v-model="ruleForm.shifagongzi" placeholder="实发工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="登记日期" prop="dengjiriqi">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.dengjiriqi" 
						type="date"
						:readonly="ro.dengjiriqi"
						placeholder="登记日期"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.dengjiriqi" label="登记日期" prop="dengjiriqi">
					<el-input v-model="ruleForm.dengjiriqi" placeholder="登记日期" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="textarea" v-if="type!='info'" label="扣款原因" prop="koukuanyuanyin">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="扣款原因"
					  v-model="ruleForm.koukuanyuanyin" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.koukuanyuanyin" label="扣款原因" prop="koukuanyuanyin">
					<span :style='{"fontSize":"16px","lineHeight":"40px","color":"inherit","fontWeight":"500","display":"inline-block"}'>{{ruleForm.koukuanyuanyin}}</span>
				</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"30px auto","alignItems":"center","textAlign":"center","background":"none","display":"flex","width":"60%","fontSize":"18px"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					确定
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					撤消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				yuefen : false,
				zhanghao : false,
				xingming : false,
				jiabangongzi : false,
				jibengongzi : false,
				jixiaojiangjin : false,
				koukuanjine : false,
				qitabuzhu : false,
				koukuanyuanyin : false,
				shifagongzi : false,
				dengjiriqi : false,
			},
			
			
			ruleForm: {
				yuefen: '',
				zhanghao: '',
				xingming: '',
				jiabangongzi: '',
				jibengongzi: '',
				jixiaojiangjin: '',
				koukuanjine: '',
				qitabuzhu: '',
				koukuanyuanyin: '',
				shifagongzi: '',
				dengjiriqi: '',
			},
		
			yuefenOptions: [],
			zhanghaoOptions: [],

			
			rules: {
				yuefen: [
					{ required: true, message: '月份不能为空', trigger: 'blur' },
				],
				zhanghao: [
					{ required: true, message: '账号不能为空', trigger: 'blur' },
				],
				xingming: [
					{ required: true, message: '姓名不能为空', trigger: 'blur' },
				],
				jiabangongzi: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				jibengongzi: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				jixiaojiangjin: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				koukuanjine: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				qitabuzhu: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				koukuanyuanyin: [
				],
				shifagongzi: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				dengjiriqi: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {
		shifagongzi: {
			get: function () {
				return 0+parseFloat(this.ruleForm.jiabangongzi==""?0:this.ruleForm.jiabangongzi)+parseFloat(this.ruleForm.jibengongzi==""?0:this.ruleForm.jibengongzi)+parseFloat(this.ruleForm.jixiaojiangjin==""?0:this.ruleForm.jixiaojiangjin)-parseFloat(this.ruleForm.koukuanjine==""?0:this.ruleForm.koukuanjine)+parseFloat(this.ruleForm.qitabuzhu==""?0:this.ruleForm.qitabuzhu) || 0
			}
		},



	},
    components: {
    },
	created() {
		this.ruleForm.dengjiriqi = this.getCurDate()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='yuefen'){
							this.ruleForm.yuefen = obj[o];
							this.ro.yuefen = true;
							continue;
						}
						if(o=='zhanghao'){
							this.ruleForm.zhanghao = obj[o];
							this.ro.zhanghao = true;
							continue;
						}
						if(o=='xingming'){
							this.ruleForm.xingming = obj[o];
							this.ro.xingming = true;
							continue;
						}
						if(o=='jiabangongzi'){
							this.ruleForm.jiabangongzi = obj[o];
							this.ro.jiabangongzi = true;
							continue;
						}
						if(o=='jibengongzi'){
							this.ruleForm.jibengongzi = obj[o];
							this.ro.jibengongzi = true;
							continue;
						}
						if(o=='jixiaojiangjin'){
							this.ruleForm.jixiaojiangjin = obj[o];
							this.ro.jixiaojiangjin = true;
							continue;
						}
						if(o=='koukuanjine'){
							this.ruleForm.koukuanjine = obj[o];
							this.ro.koukuanjine = true;
							continue;
						}
						if(o=='qitabuzhu'){
							this.ruleForm.qitabuzhu = obj[o];
							this.ro.qitabuzhu = true;
							continue;
						}
						if(o=='koukuanyuanyin'){
							this.ruleForm.koukuanyuanyin = obj[o];
							this.ro.koukuanyuanyin = true;
							continue;
						}
						if(o=='shifagongzi'){
							this.ruleForm.shifagongzi = obj[o];
							this.ro.shifagongzi = true;
							continue;
						}
						if(o=='dengjiriqi'){
							this.ruleForm.dengjiriqi = obj[o];
							this.ro.dengjiriqi = true;
							continue;
						}
				}
				











			}
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.yuefenOptions = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(',')
            this.$http({
				url: `option/hugong/zhanghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.zhanghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			zhanghaoChange () {
				this.$http({
					url: `follow/hugong/zhanghao?columnValue=`+ this.ruleForm.zhanghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.xingming){
							this.ruleForm.xingming = data.data.xingming
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `hugonggongzi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.shifagongzi = this.shifagongzi












var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "hugonggongzi/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `hugonggongzi/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.hugonggongziCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `hugonggongzi/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.hugonggongziCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.hugonggongziCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: inherit;
	  	  background: none;
	  	  font-weight: 600;
	  	  display: inline-block;
	  	  width: 200px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 200px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: #fff;
	  	  width: 400px;
	  	  font-size: 16px;
	  	  border-color: #C7D5E0;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  height: 36px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: #fff;
	  	  width: 400px;
	  	  font-size: 16px;
	  	  border-color: #C7D5E0;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  height: 36px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  padding: 0 10px;
	  	  color: inherit;
	  	  font-size: 16px;
	  	  border-color: #C7D5E0;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: #fff;
	  	  width: auto;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 36px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  padding: 0 10px 0 30px;
	  	  color: inherit;
	  	  font-size: 16px;
	  	  border-color: #C7D5E0;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  min-width: 250px;
	  	  height: 36px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #C7D5E0;
	  	  cursor: pointer;
	  	  border-radius: 20px;
	  	  color: #aaa;
	  	  background: #fff;
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #C7D5E0;
	  	  cursor: pointer;
	  	  border-radius: 20px;
	  	  color: #aaa;
	  	  background: #fff;
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #C7D5E0;
	  	  cursor: pointer;
	  	  border-radius: 20px;
	  	  color: #aaa;
	  	  background: #fff;
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #C7D5E0;
	  	  border-radius: 20px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: #fff;
	  	  width: 500px;
	  	  font-size: 16px;
	  	  height: 140px;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 1px solid #3fcbca;
				cursor: pointer;
				padding: 0 10px;
				margin: 0px 4px;
				color: #3fcbca;
				display: inline-block;
				font-size: 18px;
				line-height: 24px;
				border-radius: 20px;
				outline: none;
				background: none;
				width: auto;
				height: 40px;
			}
	
	.add-update-preview .btn .btn1:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 1px solid #23b7e5;
				cursor: pointer;
				border-radius: 20px;
				padding: 0 10px;
				margin: 0px 4px;
				outline: none;
				color: #23b7e5;
				background: none;
				width: auto;
				font-size: 18px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn2:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 1px solid #3fcbca;
				cursor: pointer;
				border-radius: 20px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #3fcbca;
				background: none;
				width: auto;
				font-size: 18px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn3:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 1px solid #FF6B6B;
				cursor: pointer;
				border-radius: 20px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #FF6B6B;
				background: none;
				width: auto;
				font-size: 18px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn4:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 1px solid #65C3DF;
				cursor: pointer;
				border-radius: 20px;
				padding: 0 20px;
				margin: 4px;
				outline: none;
				color: #65C3DF;
				background: none;
				width: auto;
				font-size: 18px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn5:hover {
				opacity: 0.8;
			}
</style>
