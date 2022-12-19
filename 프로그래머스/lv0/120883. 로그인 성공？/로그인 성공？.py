def solution(id_pw, db):
    find_id = False
    for dbid, dbpw in db:
        if dbid == id_pw[0]:
            find_id = True
            if dbpw == id_pw[1]:
                return 'login'
    return 'wrong pw' if find_id else 'fail'