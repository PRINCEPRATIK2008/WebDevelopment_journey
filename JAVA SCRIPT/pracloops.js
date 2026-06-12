// question : programe demonstrating for in loops.

let intro = {
    Name: "Kalua",
    Number: 928763902,
    Role: "Full stack developer",
    Company: "Calcxx"
}
for (const key in intro) {
    const element = intro[key];
    console.log(key, element);
}

// question : programe demonstrating for of loops.

for (const o of "PRINCE") {
    console.log(o);
}

// question : programe demonstrating while loops.

let a = 0;
while (a<7) {
    console.log(a);
    a++;
}