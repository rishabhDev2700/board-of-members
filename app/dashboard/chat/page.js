import { Card, CardHeader, CardContent} from '@/components/ui/card'
import React from 'react'

export default function Page() {
    return (
        <div className='lg:grid my-12 lg:grid-cols-4 lg:w-4/6 mx-auto'>
            <Card className="hidden lg:block h-[75vh]  mx-2 lg:col-span-1">
                <CardHeader>
                    People
                </CardHeader>
                <CardContent>
                    <Card>
                        <CardHeader>user 420</CardHeader>
                    </Card>
                </CardContent>
            </Card>
            <Card className="h-[75vh] mx-4 lg:mx-2 shadow-md shadow-black/20 lg:col-span-3">

            </Card>
        </div>
    )
}
