<template>
    <div id="editTxt">
    edittext page!!!
    <myDiv></myDiv>
    <myDiv1></myDiv1>
    </div>
</template>

<script>

export default {
  name: 'EditTxt',
  components:{"myDiv":{template: '<h1>自定义组件!</h1>'},"myDiv1":{template: '<h1>自定义组件1!</h1>'}}
  }

</script>