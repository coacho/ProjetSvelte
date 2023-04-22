<script>

const systems = [
    { name: "game1", url: "game1"},
    { name: "game2", url: "game2" },
    { name: "game3", url: "game3"},
  ];

</script>

<style>
  .item {
    width: 33.3%;
    box-sizing: border-box;
    padding: 10px 10px 10px 0;
    float: left;
    margin-top: 10px;
    position: relative;
  }
  .item:last-of-type {
    padding-right: 0;
  }
  .system-button {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
  }
  .system-name {
    color: var(--default-text-color);
    text-align: center;
    display: block;
    font-size: 20px;
    padding: 15px 0;
  }
</style>

<nav> 
    <div>
        {#each systems as item}
        <div class="item">
            <a
            class="system-button bh"
            href="#/{item.url}"
            title={item.name}>
            <div class="system-name">{item.name}</div>
            </a>
        </div>
        {/each}
    </div>
</nav>

<main>

</main>
  

  