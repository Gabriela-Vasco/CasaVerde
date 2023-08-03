import { useEffect, useState } from "react"
import "./ShoppingCart.css"
import { parse } from "dotenv";

export default function ShoppingCart(){
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cart);
    }, []);

    function removeFromCart(itemId){
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    function increaseQuantity(itemId) {
        const newCart = cart.map((item) =>
          item.id === itemId ? { ...item, quantidade: item.quantidade + 1 } : item
        );
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      
      function decreaseQuantity(itemId) {
        const newCart = cart.map((item) =>
          item.id === itemId && item.quantidade > 1
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        );
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      }

    function closeCart(){
        if(cart.length > 0){
            localStorage.removeItem("cart");
            setCart([]);
            alert("Compra finalizada com sucesso!")
        } else {
            alert("Seu carrinho está vazio!")
        }
    }

    const getTotal = cart.reduce((acc, item) => {
        return acc + parseFloat(item.Valor.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
                })) * parseFloat(item.quantidade)
            }, 0).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
        })

    const cartElements = cart.length > 0 ? 
                        cart.map((item) => (
                            <tr key={item.id}>
                                <td className="shopping-cart__table-product">
                                    <img src={item.Imagem} />
                                    <p>{item.NomePlanta}</p>
                                </td>
                                <td>
                                    <button className="shopping-cart__table-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                                    {item.quantidade}
                                    <button className="shopping-cart__table-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                                </td>
                                <td>
                                    R${item.Valor.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                        })
                                    }
                                </td>
                                <td>
                                    R${((parseFloat(item.Valor.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                        })) * parseFloat(item.quantidade))).toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })
                                    }
                                </td>
                                <td><button className="shopping-cart__table-btn" onClick={() => removeFromCart(item.id)}>x</button></td>
                            </tr>
            
                         )) :
                            <tr>
                                <td colSpan={5} className="shopping-cart__table-empty">Seu carrinho está vazio!</td>
                            </tr>

    return (
        <div className="shopping-cart">
            <h1 className="shopping-cart__title">Meu Carrinho</h1>
            <div className="shopping-cart__table">
                <table>
                    <thead>
                        <tr>
                            <th >Produto</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Subtotal</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                            {cartElements}
                    </tbody>
                </table>
            </div>
            <div className="shopping-cart__total">
                <h3>Total: R${getTotal}</h3>
                <button className="shopping-cart__total-btn" onClick={closeCart}>Finalizar Compra</button>
            </div>
        </div>
    )
}