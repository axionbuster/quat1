function hamiltonProduct(p, q) {
    return [p[0] * q[0] - p[1] * q[1] - p[2] * q[2] - p[3] * q[3],
    p[0] * q[1] + p[1] * q[0] + p[2] * q[3] - p[3] * q[2],
    p[0] * q[2] - p[1] * q[3] + p[2] * q[0] + p[3] * q[1],
    p[0] * q[3] + p[1] * q[2] - p[2] * q[1] + p[3] * q[0]]
}
function grabP() {
    return [$('#p0').val(), $('#p1').val(), $('#p2').val(), $('#p3').val()]
}
function grabQ() {
    return [$('#q0').val(), $('#q1').val(), $('#q2').val(), $('#q3').val()]
}
function mulpq() {
    const p = hamiltonProduct(grabP(), grabQ())
    for (let i = 0; i < 4; i++)
        $(`#a${i}`).val(p[i])
}
function mulqp() {
    const p = hamiltonProduct(grabQ(), grabP())
    for (let i = 0; i < 4; i++)
        $(`#a${i}`).val(p[i])
}
