import { z } from "zod";


export const DealSchema = z.object({
    id: z.string(),
    title: z.string(),
    type: z.string(),
    slug: z.string(),
    assignedCategories: z.array(z.object({
        id: z.string(),
        absoluteSlug: z.string()
    }))
})

export type Deal = z.infer<typeof DealSchema>