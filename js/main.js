var ar = [20, 35, 2, 10, 1];
var temp;

var count = 0;

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {

        if (ar[i] <= ar[j]) {
            count++;
        }



    }

    if (count == 5) {
        console.log(ar[i])
    } else {
        count = 0;
    }
}

count = 0;
for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {

        if (ar[i] >= ar[j]) {
            count++;
        }



    }

    if (count == 5) {
        console.log(ar[i])
    } else {
        count = 0;
    }
}
