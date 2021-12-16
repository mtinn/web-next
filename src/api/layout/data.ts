import {Layout, layoutSchema} from "./type";


export async function getLayout(categoryId: string): Promise<Layout> {
    const layout = await fetch(process.env.API_URI + 'layouts/category/' + categoryId)
        .then((response) => response.json())
    return layoutSchema.parse(layout)
}