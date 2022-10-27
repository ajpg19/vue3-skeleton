import {ref} from "vue";

export const useNavigationDrawer = () => {
    const drawerIsOpen = ref(true)
    const navigationItems = [
        {label: 'inventory', icon: 'list_alt', name:'Inventory'},
        {label: 'locations', icon: 'location_on', name:'Locations'},
        {label: 'assets_catalog', icon: 'account_tree', name:'AssetsCatalog'},
        {label: 'tags', icon: 'barcode', name:'Tags'},
        {label: 'bulk_data_upload', icon: 'cloud_upload', name:'BulkDataUpload'},
        {label: 'nomenclators', icon: 'folder_open', name:'Nomenclators'},
        {label: 'resumes', icon: 'feed', name:'Resumes'},
        {label: 'download_center', icon: 'cloud_download', name:'DownloadCenters'},
        {label: 'notifications', icon: 'notifications', name:'Notifications'},
        {label: 'asset_operations', icon: 'inventory', name:'AssetOperations'}
    ]

    const toggleDrawer = () => {
        drawerIsOpen.value = !drawerIsOpen.value
    }

    return {
        drawerIsOpen,
        navigationItems,
        toggleDrawer
    }
}