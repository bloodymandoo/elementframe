<template>
  <div class="dropdown">
    <a href="#" data-toggle="dropdown" class="dropdown-toggle" aria-expanded="false"> <i class="fa fa-envelope fa-lg"></i> <span class="badge badge-header badge-warning">9</span>
    </a>
    <DropDetail></DropDetail>
  </div>
</template>

<script>
import DropDetail from 'components/common/dropdown/dropdetail'
export default {
  name: 'DropDown',
  components: {
    DropDetail
  }
}
</script>

<style scoped>

</style>
