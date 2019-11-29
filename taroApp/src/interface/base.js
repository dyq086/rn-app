import request from "@/service/request";

export function getGoodsDetail(data) {
    return request.get('/goods/detail', data)
}