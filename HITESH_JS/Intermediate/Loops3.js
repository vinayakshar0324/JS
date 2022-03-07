const names = ["Youtube", "Netfilx", "facebook", "instagram", "Amazon"];

for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "instagram",
    fb: "facebook",
    lco: "learncodeeonline.in"
};

for (const n in symbols){
    console.log(`Keys ${n} and value is: ${symbols[n]}`);
}