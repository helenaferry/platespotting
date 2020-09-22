<template>
<div class="number-plate">
    {{plateDisplay}}
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'NumberPlate',
    props: {
        plate: {
            type: Number,
            default: 0
        },
    },
    computed: {
        plateDisplay: function () {
            return this.plate.toString().padStart(3, '0');
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.number-plate {
	font-size: 42px;
	font-weight: bold;
	border: 1px solid black;
	width: fit-content;
	border-radius: 10px;
	padding: 2px 15px;
	margin: auto;
}
</style>


<docs>
## Examples

```jsx
<number-plate :plate="123"></number-plate>
```

Padded number:
```jsx
<number-plate :plate="8"></number-plate>
```

</docs>