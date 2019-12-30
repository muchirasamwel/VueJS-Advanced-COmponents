<template>
    <div class="navbar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link> </li>
            <li><router-link to="/Contact">Contact</router-link> </li>
        </ul>
    </div>
</template>
<script>
    import './_navbar.scss'
    export default {
        props: {
        },
    };
</script>
