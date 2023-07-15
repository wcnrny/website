<template>
    <div class="footer-container">
        <a href="https://github.com/wcnrny/website">This website is open-source on Github. Check that out!</a>
    </div>
</template>

<style lang="scss">
.footer-container {
    display: inline-block;
    width: 100%;
    background-color: $secondary-background-color;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-inline: 4rem;

    a {
        vertical-align: middle;
        font-family: 'Inter', sans-serif;
        text-decoration: none;
        color: $text-light;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: $text-light;
            transform: scaleX(0);
            transition: transform 0.3s;
            transform-origin: left;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }
}
</style>
