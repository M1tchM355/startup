import React from 'react';
import './new.css'

export function New() {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    const recipesText = localStorage.getItem('recipes');
    if (recipesText) {
      setRecipes(JSON.parse(recipesText));
    }
  })

  return (
    <main className="container-fluid">
      <h1>New Recipe</h1>
      <section className="generate">
        <form>
          <div>
            <p>What ingredients do you want the recipe to include?</p>
            <input type="textarea" id="ingredients" placeholder="Type ingredients here" />
          </div>
          <div>
            <p>Any other specifications?</p>
            <input type="textarea" id="specifications" placeholder="Breakfast, snack, healthy, quick, etc" />
          </div>
          <button type="submit">Generate!</button>
        </form>
      </section>
      <section>
        <p>Generating new recipe...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar elit non ligula accumsan, vel tempus quam ultrices. In hac habitasse platea dictumst. Nunc ut sollicitudin lorem. Duis pretium, turpis in commodo imperdiet, enim quam pellentesque urna, ac aliquam urna mi eu erat. Aenean tempus, nisi id hendrerit convallis, ante nibh elementum urna, id eleifend sapien odio et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus convallis dapibus. Mauris nisl nisi, elementum id risus non, maximus iaculis sapien. Phasellus laoreet metus sit amet pharetra tincidunt. In arcu tellus, facilisis id faucibus id, scelerisque in massa. Aliquam nibh elit, tincidunt quis ipsum egestas, condimentum pellentesque quam.

          Proin id orci lacus. Ut mauris massa, facilisis id tincidunt ut, pulvinar eget eros. Aenean ultricies enim vel elit venenatis, in tempus nulla lacinia. In vel cursus augue. Vivamus euismod sapien ac mi ullamcorper, quis sagittis quam vehicula. Praesent sagittis vestibulum ante, sed efficitur velit pulvinar ut. Pellentesque in nibh metus. Etiam felis nisi, suscipit sed laoreet posuere, vestibulum eget mi. Duis tristique turpis nulla, eu tristique nulla eleifend vel. Donec sit amet congue tortor, vestibulum tincidunt tortor. Morbi vitae volutpat velit. Curabitur sodales dolor in neque sagittis gravida sed vitae velit. In vel turpis augue. Etiam ornare eros arcu, et consequat eros dignissim non. Quisque at pulvinar eros, non imperdiet ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          
          Duis semper risus sapien, eu dignissim ligula posuere eu. Donec nec libero a quam fermentum commodo. Maecenas eget congue enim. Mauris sed vehicula quam, ut sagittis nisi. Mauris vestibulum dignissim aliquam. Phasellus fringilla dui commodo maximus tempus. Sed in mi eros. Phasellus gravida magna metus, ut lacinia nisl vehicula non. Donec vitae quam quis leo mollis fringilla. Sed placerat ante ut urna convallis, in tempor metus tincidunt. Nam ullamcorper, magna a interdum congue, lorem nisi interdum orci, eleifend fringilla dolor tortor semper odio. Nunc quis sapien turpis. Proin sagittis nisi orci, sit amet lacinia metus consectetur nec. Cras urna lectus, accumsan a sagittis non, vulputate eu ligula. Integer iaculis accumsan interdum. Etiam ac porttitor tortor.</p>
        <p><button type="button">I made it!</button></p>
      </section>
      <section className="popup">
        <form method="get" action="box">
          <div className="stars">
            <p>Rating:</p>
            <button type="button"><img src="data:image/png;base64,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" width="50" /></button>
            <button type="button"><img src="data:image/png;base64,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" width="50" /></button>
            <button type="button"><img src="data:image/png;base64,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" width="50" /></button>
            <button type="button"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA3lBMVEX/////2AD/1gD//P/9///92AD/1AD///3/2QD///v81QD//f782QD7///9//3//Pz62wD8//n//vf/+v/+/vT4//n6/P/41gD2/////Pf47YP+0QD8//P83AD//u//+fr87J7653T25Vr+87f965P++uD8987///D88q/47ZP03gD56Xv/64z26G/99uL/3k3877383SX/43H04Sv+8tH74mL63kP89sb/6qn+4Df87KP64Fj82i/9+9j79b398ND85Efz74z/67b475n/6ZP26nv35mX/9er94WXy/+6XkIhNAAAOTklEQVR4nO2daVfcOBaGbVmSrdWSsC2bWljNEopKKk2g2TLppptk/v8fGhl6BiZsVVBGVTl+OIfkC1V6Lenq3ivpOgg6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OpaNGDJIIikhYxFjxndzWoA4giyIg4xoEjDfzWkDSWJWiEAKVkgS+W5NC7jRGZDxp/1PtYkKk/puTgsYxrLhBFE62TG/5DQMoEy/T0DofngdQeG7OS2gC7Fuwwa7IXLiuzktsJL2J+GtQjQsK9/NaQE2XLfgRiHvHRDouzktUFWTJLlViHhd+m7OfElFP4rFao/z22E6wJ9lFPXlr7Nk6IBl+fi3EKEbgZSH6ijPGPt1zE0eVxk8sAm97UNEQ/UF5hWTvhs2N3TaL8YKYH7bhxwAhI5En2nfDZsbJMqLVZqAAb0dpYgqvBHnv5BCQdLL2+67x46ofp0lg5Ti8GeFfJPlse+GzY0qr4H9SaFCJ+WvEySy+BDznxTa3rX5dfpQXCL08yhFoTr5JVYLI3Rk9GfAf1YIBuA8TaMiX/qhCklfHH1I7ANLY0P1SRAXF/tu4RvRaZrDLypBP89D16n2GEKzsuxDVaca7iAEkp8VogQguhXJdNmXfRn9O91wszB5MEoBdTPR5OmyG1SSyhMaPgX6PV/+PtRs84HDdrconkZLn7FJyxOqnlSo6J9Lv1qw4XXvZ4ft3iilx8Nld7/FVxU+PUqRCreWOHPK8iIy1Tng+EmFdNA7HZNI9JczY8MCQ5oupMnTClVi1yXpL6ljIyMD5TcbPnBn7im0A0S1yKLlNKg6JdEW5eGDxf6OBHDeO4tFupw7NW4xr87DAQWDZxQ6iafDZXVsJCvPnu6+O/CoTJfToFZ9ffr0FLzXkRdDvZzzMMrPHmRnHkPh7SXN2Mhs8iB38RiI2no5g0R9hh9E9o8BFN5funnI+kWajSe9AZimD3lvcmlILpZpydAyi8W2dbHDFAq5ava9U6aXaajqSAuNKJ9ylHKK6ig1he9mzwCMhNnGHD3jkt5BEeJgVLmn4rvZM0BY/v0CWYCn6cMBTgYIjfMo893sGRBVOZpmCt7ryGuR5r6bPQMkH06mcWfuQJPLvu9Wz0JUbj+TnXkMhQ/1Mp3mi8f2majwMSxA9TKdIoL7WE1jRu/gqne40CEUC6TWQpo4FTAmZEc93Gx6HoSA+mRILKGUREIIg7jJ3cQLo7qUMo6zKg5c86QQ1xSo2RRixdWmKNw64yC7MZG6Ma2LozCKIpaWQsJA6MuvWwhTPo1LeodzbEC493VnF5aCpFEcp2kaN/hW9l9yLYSox/86O/h2SgEAofs1k8IE0RBgjE6PP//1qa6lG/KakMURGNQn6wefLxBy7QyRUlbRBxv3z6NwOECKu+noPoRf/Pi8/enyPQW40QLjmEVutjE34cTNnQJnDVhVX35d/zLhGIAZO+1FAED8fH/vpK4KISQpCjcJSCUaS1SlMYOFM0dz7eK+FLpvnCHJG3UreT48+vTH4flFr4cd8xX3P41u3KrJt82Ns6PvZnclcrKEgCzKpdRZZpzNnZM40qwGkenLyD3GINLjk72rH8duRPV61DnNnKvZ/JdpUYpz28xO2sP89Mcf+3uXu06lKJnM0hU3nIJ5RZQkDkhWCjis652zjc3JBAEMksEAWc5DzDma9wD9BwxC7kJH9wXuuxDCANnJ+fX2ST0eGpmnjMXzirfcWBD51vrox8ckBM3ijHhjU5p/aMhp859WFPImkeU8B4Ts7Vdy3vxG6OJ8tL63m9207A246UaIiMaXJ1cbp+4BttNPrwWAHp18GW3t1KlmbpC9ZryywA306uy3iW06qZ1eeguuPykN7W9nurlv9Jo+jIyzMPuqh5Mby+1b0APcEAbO++3ZgwBq85rIKzIyGDZ7Y/Zm9PsW9IAkaSwt5fZDTV55U4wUZMe5JjxsBmk768GbAI2v59xZelJFr1s2GoU4AVPtPfhCOROIdwgkr9n4uBmlvOdCU98yngFYHvLd5tTOqxQ6S3OGErt4ZvQO53TYvYBJ8xqFN6tF8buLvX3LeAYVoj+la+kr9P2z4sNyHT+9Se0fi9dLScgbrt9URFy5XqT4g28tD1A9oABdF/ptKToh8spJtIN24qO30BtQJzDNxdv2HkkW5WIbPTzE7B9uMdoWeZS9LcBgw0wQsZDmRgH0e0FENnzbGQDnt4tUu15crMiiAdBtmVWSzOP2lInFPg0VBYtibj5gpEK6D9N57ccVOl/bD93SvygdCbhNwv21XM/rgIOsnLkZOS9+ti3B9qAqoc7IFGZeeZq0MloWf+FwUcyNCvFfhdSmmtexVB3LwqTFiC7KKA3xQVGZYs53NUwK95v9Fs/ezQccWoRXg2xtnuJuKHR/bZ86c+PXu2luvINVZ2Tmf/hGmqgPR3S6Q0DtgTjGB0GexfM/4h8bo1M4wolfc2MTPCqMJnNbCu9ozE2VFQeeXXAEDooslTBr6RDcWhas9pD1Y24+YG4BXQ1arU8knXezCkLFfeRuMOIJXZ2jJ/MYMM7y4ADjGY8hzAdkMT1sx8jckaWxzgpnbnxkGC2nbRmZO3QG5ZozN16S/AgdarImWjMyd6wZuOrCF/6O5kZhrhD6+72KoN2am8Ta93NTG4Hg8Hsu3+cYcWNu4CHGdrZzXW+BK4Cvoe6z9znxnqVEGzmi72huVII/V5lka+9zyNaZG+Hm4uG76WtKTFxXzpOZX8g7BWuG/e2CKY7bdlMbIxOCwzR770uYQubV3+7LW8/dAJqE/Pp7rt/7nDtkzrtpzE3bfYhUj55Xec7e+wSxYY13c4BR2+Ym4ep6rAVbee/rbdIwneb6Omw7ILbg47CsdJp5uRqV9vUhopw+cw/2LbiPRpxuDoW/A+CG6LWNJnPTTkfSMKFo87uUu94UiijW+ouiD0qzzAcXDtrjoczJ/PNq09Kvgrz/fROF7Sikod2spSSxv3oEMIM6LY9sS8t+Qo/rstpdSz3fpmHmfNDOPEz4TrkIty4j8rGlpAZHi1EWBJqLlk4uKnq2EArlsK0jRRxvkEW4ORuPLWgnTYzAZrUIpQjEOmppY3FAB9Ui9KEY0Zbc7wTx4SL0ofzSWoLYopNFULh7POstrqlR9GoR6mQNj5FqRyFVeHURloudAZ/xzu+0KKR+LELt9k9oQFta8RH/uAhVCK6wakkhD9FF7Vue4wcetHRXASGe7PiW5zgO21osELXIs0ImGIMJQi1tYNxsasPmFUP+JDYvPWitC118GNLrZkH0pzDOINuh6ObOXgs013UmN5cGvCkMMgHP2jt+4gwYR5C4meBNIBsKsY9D0FJWGCE0CPtZAP0p1HEqf7Sj7r+Ar+VK5k+hjFNz3rLCM1FJf/NQugB/0q7CcAQz4S9fqiG5bHt37Uf2uotp88E4hW3vrn2so76/4kNZNGvBq9nhdWn8BYlVJH60fToKHYnUny1NU33ctkKwJzzWcGFyOGlbIT5gcyvwMTtRf2zbtjR4c0X7K6iYiU986siJA4wQoJyGFDdvKJkS8Jsk/lIZTGxNn8DAqKnGktDEqgGf/nIKnQw9bl4wvU6nnocuFAIY288TAABKplaI0E6rh4KfJ842pleoELZqNC6/b0/sDPVeONiab7Gk2RRW36aPnCwGG5eQFFLU26A3/YPp7UF/qX2ZqZf60HJnXRLEEZ6s1uL28GQmyPYFRm4yNqW9XnBsUbhR+hulom6qDD0PdfbFDdDJQW0Ccrsrn8bQfD+YNCeplXrp/i2iXzyuh8Hei/OJumcAenZ/XJba/GP2YWZEXo63LXALyEsfgNDprkeFqy+WR+QIqYnTl7MoIv+40P04iuJIluOricXhCyUbUMJrj3maw95LV9k4CEeXQjaVHo37ffNnUhOoJYmdzRm9XL2I0yN/CvvH/PHjUDcJxuZNZPhi38Cnz8QYuTu6AG4kJu4HPPpRA2DX/W1A1Rf8iSNtgA4GjX0ZZZlMn05CGMPSejTphTc259G8JErsyF98eEmfUIhokjj/ZXtY5sI8E8ASY3RZ1iOLccIf399xjuy1P8/7qxtbjzbLcmpPr4alXGEsip8+llZk6Qqr+mW9rxBFj9scBY79nWvbe7LcHlVXYxe5EhlLLZ9OJLG4kH3W2JzLDfS4zeETdOplE9FEjMADiu4XRG4qbzkPxnL78UrP+KYDI+pV3vg5jX9+3+YMMPe1xebc4XP6f10IEmSdB0NP/8qImLH6ViqFGW9MQFNtkt+PPAZuIn5tScKzRMRJuKnaeNcY58ElGE3OsrKU2YwJMp2SPHc2p+lBev89Zm4e4O2WRDxLRGA8RBzc3x111kKd7mVlvuKcFjJblXxmsihacT7AH00JNnX/sXH8pSURz7eIFPFl80q1e8OU0sneUENGdMokmS0VXwXSZO6PiNi5BvdrEDuF4LglEc9Ciqrc6yVhEg7cvMGgqWV6vvfGmk03CFgf8Cbu4E0ygLslN+EBfGVlxDdAJBHbwHVbY1/QgIf02+9ZBOfQjpTArL6e9GhjtRAAA9oDu+T994FNruHI+ZOJG6YA9wbHf0ZlrjPzdifZBKLfLy83nDDEnbfayKzN+291ax3JLbf0hYC7JeL4xJRkLU6j4O2JP6FNFKV9Wf+t3Dh1biHl1kcfSrLy78o5jSEA9NvXrCn4n+e5nMOLDF2MZdwnaRKcbGLsVsee/Qw9zMMbxteI2i9bsKUtzD683FCW0o1hKx8/Dbo62vqXiaBs5/lGJkiP9lZ31vzFh30tYJTL5+Kjt1AFMNcx1MJfVn+FGUPSdCVo5y0/2vl+KxWJjb+bXc6gRppoGbUzShkJirzP2EJcuujo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjoCP4Dp4UfdZ058F4AAAAASUVORK5CYII=" width="50" /></button>
            <button type="button"><img src="data:image/png;base64,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" width="50" /></button>
          </div>
          <div>
            <label htmlFor="comments">Comments: (optional)</label>
            <p><input type="textarea" id="comments" placeholder="Comments" /></p>
          </div>
          <div>
            <label htmlFor="save">Save to personal recipe box? </label>
            <input type="checkbox" id="save" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}
