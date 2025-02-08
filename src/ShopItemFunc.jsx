import PropTypes from 'prop-types';

/**
 * Поля для проверки по типам
 */
const propTypes = {
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
}

/**
 * Отрисоовка блока каталога
 */
function ShopItemFunc({ item }) { // props     
    const getBrand = () => item.brand
    const getTitle = () => item.title
    const getDescription = () => item.description
    const getDescriptionFull = () => item.descriptionFull
    const getPrice = () => item.price.toFixed(2)
    const getcurrency = () => item.currency

    return (
        <div className="main-content">
            <h2>{getBrand() ?? ''}</h2>
            <h1>{getTitle() ?? ''}</h1>
            <h3>{getDescription() ?? ''}</h3>
            <div className="description">
                {getDescriptionFull() ?? ''}
            </div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{getcurrency() ?? ''}{getPrice() ?? ''}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

/**
 * Проверка по типам
 */
ShopItemFunc.propTypes = propTypes;

export default ShopItemFunc; 