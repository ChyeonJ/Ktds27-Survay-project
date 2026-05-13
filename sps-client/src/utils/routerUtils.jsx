// TODO 실제 있는 경로만 import하도록 리펙터링
const modules = import.meta.glob('../component/**/*Main.jsx', { eager: true });

const componentMap = {};

Object.keys(modules).forEach((path) => {
    const fileName = path.split('/').pop().replace('.jsx', '');
    componentMap[fileName] = modules[path][fileName];
});

export const componentConvert = (value) => {
    const componentName = value.split(' ')
                             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                             .join('') + 'Main';
    const Component = componentMap[componentName];
    return (Component ? <Component /> : <div>없는 페이지</div>);
}

export const generatePath = (value) => {
    return value.toLowerCase().replace(/\s+/g, '-');
}

export const generateRoute = (menuList) => {
    const rootItem = menuList.find(item => item.parentId === null || item.parentId === "");
    if (!rootItem) {
        return [];
    }
    const buildRoutes = (parentId) => {

        return menuList
            .filter(item => item.parentId === parentId)
            .map(menu => {
                const childRoutes = buildRoutes(menu.id);

                const path = generatePath(menu.name);

                const routeObject = {
                    path: path,
                    element: componentConvert(menu.name),
                };

                if (childRoutes.length > 0) {
                    routeObject.children = childRoutes;
                }

                return routeObject;
            });
    };
    return buildRoutes(rootItem.id);
};