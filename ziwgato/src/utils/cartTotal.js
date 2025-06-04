export function cartTotal(item) {
    const base = item.variant?.price || item.price || 0
    const extrasTotal = Array.isArray(item.extras) ? item.extras.reduce((sum, extra) => sum + (extra.price || 0), 0) : 0
    return (base+extrasTotal)*(item.quantity ||1)
}