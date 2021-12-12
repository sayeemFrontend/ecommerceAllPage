import { useEffect, useState } from 'react';

const View = ({ imgList }) => {
    const [groupList, updateGroupList] = useState()

    useEffect(() => {
        updateGroupList(imgList)
    }, [])
    return (
        <>
            {
                imgList?.map((i) => (
                    <div className="">
                        <div key={i} className="">
                            <img src={i} alt={i} />
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default View;