function teste(key){
    switch (key) {
        case "Pyettro"://se nao tiver o break pega a proxima linha tambem ou uso um return(nada acontece depois de um return)
        case "jogador":
        console.log("Meu nome é: Pyettro");
        break;

        case "Jose":
        console.log("Meu nome é: Jose");
        break;
        
        case "Mario":
        console.log("Meu nome é: Mario");
        break;
        
        default:
            console.log("Meu nome é: Nao sabemos");
            break;
    }
}
teste("jogador");