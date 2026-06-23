 // variable
        let a = 2
        a =99
        console.log(a);
        {
            let b = 10
        }
            console.log(b); // we can not access the let variable outside the block
        
           // var variable
           var b=7
           console.log(a);
           {
            var b = 10
           }
           console.log(b);// it gives output 10 the let variable is reassigned
           
           //const variable
            const name = "Kiran"
            console.log(name);// Kiran
            a = 10
            b = 5
            console.log("sum =",a+b);
            console.log("HELLO WORLD");