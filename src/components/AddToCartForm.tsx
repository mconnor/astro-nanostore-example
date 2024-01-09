import { isCartOpen, addCartItem } from '../cartStore'
import type { CartItemDisplayInfo } from '../cartStore'
import type { ComponentChildren } from 'preact'

type Props = {
    item: CartItemDisplayInfo
    children: ComponentChildren
}

const AddToCartForm = ({ item, children }: Props) => {
    const addToCart = (e: SubmitEvent) => {
        e.preventDefault()
        isCartOpen.set(true)
        addCartItem(item)
    }

    return <form onSubmit={addToCart}>{children}</form>
}

export default AddToCartForm
