<template>
	<div>
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="name1">英雄名称</label>
        <input type="text" v-model="formData.name" class="form-control" id="exampleInputEmail1" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input type="text" v-model="formData.gender" class="form-control" id="exampleInputPassword1" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios';

export default {
	props: ['id'],
	data() {
		return {
			formData: {
				name: '',
				gender: ''
			}

		}
	},
	created() {
		// 根据id请求，英雄对象
		axios 
			.get('http://localhost:3001/heroes/' + this.id)
			.then((response) => {
				if (response.status === 200) {
					// this.formData.name = response.data.name;
					// this.formData.gender = response.data.gender;
					this.formData = response.data
				}
			})
			.catch((err) => {
				console.log(err)
			})
	},
	methods: {
		handleEdit () {
			axios
				.put('http://localhost:3001/heroes/' + this.id , this.formData)
				.then((response) => {
					if (response.status === 200) {
						// 跳转到列表
						this.$router.push('/heroes');
					}
				})
				.catch((err) => {
					alert('失败');
				})
		}
	}
 }
</script>

<style>

</style>

