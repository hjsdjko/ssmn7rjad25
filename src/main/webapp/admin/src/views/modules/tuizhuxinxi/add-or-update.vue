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
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="养老院名称" prop="yanglaoyuanmingcheng">
					<el-input v-model="ruleForm.yanglaoyuanmingcheng" placeholder="养老院名称" clearable  :readonly="ro.yanglaoyuanmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="养老院名称" prop="yanglaoyuanmingcheng">
					<el-input v-model="ruleForm.yanglaoyuanmingcheng" placeholder="养老院名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="床位号" prop="chuangweihao">
					<el-input v-model="ruleForm.chuangweihao" placeholder="床位号" clearable  :readonly="ro.chuangweihao"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="床位号" prop="chuangweihao">
					<el-input v-model="ruleForm.chuangweihao" placeholder="床位号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.tupian" label="图片" prop="tupian">
					<file-upload
						tip="点击上传图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.tupian?ruleForm.tupian:''"
						@change="tupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.tupian" label="图片" prop="tupian">
					<img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="总费用" prop="zongfeiyong">
					<el-input v-model.number="ruleForm.zongfeiyong" placeholder="总费用" clearable  :readonly="ro.zongfeiyong"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="总费用" prop="zongfeiyong">
					<el-input v-model="ruleForm.zongfeiyong" placeholder="总费用" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="退还押金" prop="yajin">
					<el-input-number v-model="ruleForm.yajin" placeholder="退还押金" :readonly="ro.yajin"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="退还押金" prop="yajin">
					<el-input v-model="ruleForm.yajin" placeholder="退还押金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'" label="实收费用" prop="shishoufeiyong">
					<el-input v-model="shishoufeiyong" placeholder="实收费用" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.shishoufeiyong" label="实收费用" prop="shishoufeiyong">
					<el-input v-model="ruleForm.shishoufeiyong" placeholder="实收费用" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="退住时间" prop="tuizhushijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.tuizhushijian" 
						type="date"
						:readonly="ro.tuizhushijian"
						placeholder="退住时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.tuizhushijian" label="退住时间" prop="tuizhushijian">
					<el-input v-model="ruleForm.tuizhushijian" placeholder="退住时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="用户电话" prop="yonghudianhua">
					<el-input v-model="ruleForm.yonghudianhua" placeholder="用户电话" clearable  :readonly="ro.yonghudianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="用户电话" prop="yonghudianhua">
					<el-input v-model="ruleForm.yonghudianhua" placeholder="用户电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" placeholder="年龄" clearable  :readonly="ro.nianling"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" placeholder="年龄" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="账号" prop="zhanghao">
					<el-input v-model="ruleForm.zhanghao" placeholder="账号" clearable  :readonly="ro.zhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="账号" prop="zhanghao">
					<el-input v-model="ruleForm.zhanghao" placeholder="账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="姓名" prop="xingming">
					<el-input v-model="ruleForm.xingming" placeholder="姓名" clearable  :readonly="ro.xingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else class="input" label="姓名" prop="xingming">
					<el-input v-model="ruleForm.xingming" placeholder="姓名" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' class="textarea" v-if="type!='info'" label="退住原因" prop="tuizhuyuanyin">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="退住原因"
					  v-model="ruleForm.tuizhuyuanyin" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"2px 0","margin":"0 auto 10px","color":"inherit","borderRadius":"4px","background":"none","width":"100%","fontSize":"inherit"}' v-else-if="ruleForm.tuizhuyuanyin" label="退住原因" prop="tuizhuyuanyin">
					<span :style='{"fontSize":"16px","lineHeight":"40px","color":"inherit","fontWeight":"500","display":"inline-block"}'>{{ruleForm.tuizhuyuanyin}}</span>
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
				yanglaoyuanmingcheng : false,
				chuangweihao : false,
				tupian : false,
				zongfeiyong : false,
				yajin : false,
				shishoufeiyong : false,
				tuizhuyuanyin : false,
				tuizhushijian : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				yonghudianhua : false,
				nianling : false,
				zhanghao : false,
				xingming : false,
				ispay : false,
			},
			
			
			ruleForm: {
				yanglaoyuanmingcheng: '',
				chuangweihao: '',
				tupian: '',
				zongfeiyong: '',
				yajin: '',
				shishoufeiyong: '',
				tuizhuyuanyin: '',
				tuizhushijian: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				yonghudianhua: '',
				nianling: '',
				zhanghao: '',
				xingming: '',
			},
		

			
			rules: {
				yanglaoyuanmingcheng: [
				],
				chuangweihao: [
				],
				tupian: [
				],
				zongfeiyong: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				yajin: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				shishoufeiyong: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				tuizhuyuanyin: [
				],
				tuizhushijian: [
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				yonghudianhua: [
				],
				nianling: [
				],
				zhanghao: [
				],
				xingming: [
				],
				ispay: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {
		shishoufeiyong: {
			get: function () {
				return 0-parseFloat(this.ruleForm.zongfeiyong==""?0:this.ruleForm.zongfeiyong)+parseFloat(this.ruleForm.yajin==""?0:this.ruleForm.yajin) || 0
			}
		},



	},
    components: {
    },
	created() {
		this.ruleForm.tuizhushijian = this.getCurDate()
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
						if(o=='yanglaoyuanmingcheng'){
							this.ruleForm.yanglaoyuanmingcheng = obj[o];
							this.ro.yanglaoyuanmingcheng = true;
							continue;
						}
						if(o=='chuangweihao'){
							this.ruleForm.chuangweihao = obj[o];
							this.ro.chuangweihao = true;
							continue;
						}
						if(o=='tupian'){
							this.ruleForm.tupian = obj[o];
							this.ro.tupian = true;
							continue;
						}
						if(o=='zongfeiyong'){
							this.ruleForm.zongfeiyong = obj[o];
							this.ro.zongfeiyong = true;
							continue;
						}
						if(o=='yajin'){
							this.ruleForm.yajin = obj[o];
							this.ro.yajin = true;
							continue;
						}
						if(o=='shishoufeiyong'){
							this.ruleForm.shishoufeiyong = obj[o];
							this.ro.shishoufeiyong = true;
							continue;
						}
						if(o=='tuizhuyuanyin'){
							this.ruleForm.tuizhuyuanyin = obj[o];
							this.ro.tuizhuyuanyin = true;
							continue;
						}
						if(o=='tuizhushijian'){
							this.ruleForm.tuizhushijian = obj[o];
							this.ro.tuizhushijian = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
						if(o=='yonghudianhua'){
							this.ruleForm.yonghudianhua = obj[o];
							this.ro.yonghudianhua = true;
							continue;
						}
						if(o=='nianling'){
							this.ruleForm.nianling = obj[o];
							this.ro.nianling = true;
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
				}
				















			}
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuxingming = json.yonghuxingming
						this.ro.yonghuxingming = true;
					}
					if(((json.yonghudianhua!=''&&json.yonghudianhua) || json.yonghudianhua==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghudianhua = json.yonghudianhua
						this.ro.yonghudianhua = true;
					}
					if(((json.nianling!=''&&json.nianling) || json.nianling==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.nianling = json.nianling
						this.ro.nianling = true;
					}
					if(((json.zhanghao!=''&&json.zhanghao) || json.zhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.zhanghao = json.zhanghao
						this.ro.zhanghao = true;
					}
					if(((json.xingming!=''&&json.xingming) || json.xingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.xingming = json.xingming
						this.ro.xingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `tuizhuxinxi/info/${id}`,
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
        this.ruleForm.shishoufeiyong = this.shishoufeiyong



	if(this.ruleForm.tupian!=null) {
		this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
	}













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
					url: "tuizhuxinxi/page", 
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
								url: `tuizhuxinxi/${!this.ruleForm.id ? "save" : "update"}`,
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
											this.parent.tuizhuxinxiCrossAddOrUpdateFlag = false;
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
				url: `tuizhuxinxi/${!this.ruleForm.id ? "save" : "update"}`,
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
							this.parent.tuizhuxinxiCrossAddOrUpdateFlag = false;
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
      this.parent.tuizhuxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    tupianUploadChange(fileUrls) {
	    this.ruleForm.tupian = fileUrls;
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
