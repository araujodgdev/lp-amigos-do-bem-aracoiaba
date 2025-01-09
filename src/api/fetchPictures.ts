'use server'
import {v2 as cloudinary} from 'cloudinary'

export default async function fetchPictures() {
    const pictures = await cloudinary.api.resources_by_asset_folder("aqf-pictures", {
        tags: true,
        metadata: true,
        max_results: 50
    })

    return pictures
}