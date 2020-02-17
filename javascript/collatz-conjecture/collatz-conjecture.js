export const steps = (i) => {
    let result = 0;

    if (i < 1){
        throw "Only positive numbers are allowed";
    }

    while (i > 1) {
        if (i % 2 == 0){
            i = i / 2;
            result ++;
        } else {
            i = (i * 3) + 1;
            result ++;
        }
    }
    return result;
};
